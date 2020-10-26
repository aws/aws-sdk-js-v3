type EqualCondition = ["eq", string, string] | { [key: string]: string };

type StartsWithCondition = ["starts-with", string, string];

type ContentLengthRangeCondition = ["content-length-range", number, number];

export type Conditions = EqualCondition | StartsWithCondition | ContentLengthRangeCondition;
