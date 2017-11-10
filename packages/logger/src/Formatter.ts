import {LogFormatter} from '@aws/types';

export class Formatter implements LogFormatter {
    private literalArray: string[];
    constructor(pattern: string){
        this.literalArray = this.parsePattern(pattern);
    }

    format(stats: {[key: string]: string|undefined}): string {
        let isExpression: boolean = false;
        let res = '';
        for (const literal of this.literalArray) {
            if(!isExpression) {
                res += literal;
            } else {
                if (literal !== '') {
                    res += stats[literal];
                }
            }
            isExpression = !isExpression;
        }
        return res;
    }

    private parsePattern(pattern: string): string[] {
        let isExpression: boolean = false;
        let literalArray: Array<string> = [];
        let tmpStr = '';
        for(let i = 0; i < pattern.length; i++) {
            let char = pattern.charAt(i);
            if (isExpression && char !== '}') {
                tmpStr += char;
            } else if (isExpression && char === '}') {
                if (literalArray.length % 2 === 0) literalArray.push('');
                literalArray.push(tmpStr);
                tmpStr = '';
                isExpression = false;
            } else if (
                !isExpression && 
                !(i < pattern.length - 1 && pattern.substring(i, i + 2) === '${')
            ) {
                tmpStr += char;
            } else {
                if (literalArray.length % 2 === 1) literalArray.push('');
                i++;
                literalArray.push(tmpStr);
                tmpStr = '';
                isExpression = true;
            }
        }
        if (isExpression) {
            tmpStr = '${' + tmpStr;
        }
        if (tmpStr.length > 0) {
            if (literalArray.length % 2 === 1) literalArray.push('');
            literalArray.push(tmpStr)
        }
        return literalArray;
    }
}
