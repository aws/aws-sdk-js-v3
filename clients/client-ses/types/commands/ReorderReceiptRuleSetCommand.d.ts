import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ReorderReceiptRuleSetRequest, ReorderReceiptRuleSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReorderReceiptRuleSetCommandInput = ReorderReceiptRuleSetRequest;
export declare type ReorderReceiptRuleSetCommandOutput = ReorderReceiptRuleSetResponse & __MetadataBearer;
export declare class ReorderReceiptRuleSetCommand extends $Command<ReorderReceiptRuleSetCommandInput, ReorderReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: ReorderReceiptRuleSetCommandInput;
    constructor(input: ReorderReceiptRuleSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReorderReceiptRuleSetCommandInput, ReorderReceiptRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
