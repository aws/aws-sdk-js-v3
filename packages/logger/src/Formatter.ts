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
        let res: Array<string> = [];
        let tmpStr = '';
        for(let i = 0; i < pattern.length; i++) {
            let char = pattern.charAt(i);
            if (isExpression && char !== '}') {
                tmpStr += char;
            } else if (isExpression && char === '}') {
                if (res.length % 2 === 0) res.push('');
                res.push(tmpStr);
                tmpStr = '';
                isExpression = false;
            } else if (
                !isExpression && 
                !(i < pattern.length - 1 && pattern.substring(i, i + 2) === '${')
            ) {
                tmpStr += char;
            } else {
                if (res.length % 2 === 1) res.push('');
                i++;
                res.push(tmpStr);
                tmpStr = '';
                isExpression = true;
            }
        }
        if (isExpression) {
            tmpStr = '${' + tmpStr;
        }
        if (tmpStr.length > 0) {
            if (res.length % 2 === 1) res.push('');
            res.push(tmpStr)
        }
        return res;
    }
}
