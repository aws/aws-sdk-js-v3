import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DescribeReceiptRuleSetRequest, DescribeReceiptRuleSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReceiptRuleSetCommandInput = DescribeReceiptRuleSetRequest;
export declare type DescribeReceiptRuleSetCommandOutput = DescribeReceiptRuleSetResponse & __MetadataBearer;
export declare class DescribeReceiptRuleSetCommand extends $Command<DescribeReceiptRuleSetCommandInput, DescribeReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: DescribeReceiptRuleSetCommandInput;
    constructor(input: DescribeReceiptRuleSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReceiptRuleSetCommandInput, DescribeReceiptRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
