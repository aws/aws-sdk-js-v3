import {addChecksumHeaders} from './index';

jest.mock('@aws-sdk/add-glacier-checksum-headers-browser', () => {
    return {
        addChecksumHeaders: jest.fn()
    };
});
jest.mock('@aws-sdk/add-glacier-checksum-headers-node', () => {
    return {
        addChecksumHeaders: jest.fn()
    };
});
jest.mock('@aws-sdk/is-node', () => {
    return { isNode: jest.fn() };
});
import {
    addChecksumHeaders as browserAddChecksumHeaders
} from '@aws-sdk/add-glacier-checksum-headers-browser';
import {
    addChecksumHeaders as nodeAddChecksumHeaders
} from '@aws-sdk/add-glacier-checksum-headers-node';
import {isNode} from '@aws-sdk/is-node';


describe('implementation selection', () => {
    beforeEach(() => {
        (browserAddChecksumHeaders as jest.Mock<any>).mockReset();
        (nodeAddChecksumHeaders as jest.Mock<any>).mockReset();
        (isNode as jest.Mock<any>).mockReset()
    });

    it('should use the node implementation in node', () => {
        (isNode as jest.Mock<any>).mockReturnValue(true);

        addChecksumHeaders({} as any, {} as any);
        expect((nodeAddChecksumHeaders as jest.Mock<any>).mock.calls.length).toBe(1);
        expect((browserAddChecksumHeaders as jest.Mock<any>).mock.calls.length).toBe(0);
    });

    it('should use the browser implementation elsewhere', () => {
        (isNode as jest.Mock<any>).mockReturnValue(false);

        addChecksumHeaders({} as any, {} as any);
        expect((nodeAddChecksumHeaders as jest.Mock<any>).mock.calls.length).toBe(0);
        expect((browserAddChecksumHeaders as jest.Mock<any>).mock.calls.length).toBe(1);
    });
});