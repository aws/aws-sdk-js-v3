import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DescribeActiveReceiptRuleSetRequest, DescribeActiveReceiptRuleSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeActiveReceiptRuleSetCommandInput = DescribeActiveReceiptRuleSetRequest;
export declare type DescribeActiveReceiptRuleSetCommandOutput = DescribeActiveReceiptRuleSetResponse & __MetadataBearer;
export declare class DescribeActiveReceiptRuleSetCommand extends $Command<DescribeActiveReceiptRuleSetCommandInput, DescribeActiveReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: DescribeActiveReceiptRuleSetCommandInput;
    constructor(input: DescribeActiveReceiptRuleSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeActiveReceiptRuleSetCommandInput, DescribeActiveReceiptRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
