/**
 * <p>Container for key value pair that defines the criteria for the filter rule.</p>
 */
export interface _FilterRule {
    /**
     * <p>Object key name prefix or suffix identifying one or more objects to which the filtering rule applies. Maximum prefix length can be up to 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, go to <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the Amazon Simple Storage Service Developer Guide.</p>
     */
    Name?: 'prefix'|'suffix'|string;

    /**
     * _FilterRuleValue shape
     */
    Value?: string;
}

export type _UnmarshalledFilterRule = _FilterRule;