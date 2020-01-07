import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CloneReceiptRuleSetRequest, CloneReceiptRuleSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CloneReceiptRuleSetCommandInput = CloneReceiptRuleSetRequest;
export declare type CloneReceiptRuleSetCommandOutput = CloneReceiptRuleSetResponse & __MetadataBearer;
export declare class CloneReceiptRuleSetCommand extends $Command<CloneReceiptRuleSetCommandInput, CloneReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: CloneReceiptRuleSetCommandInput;
    constructor(input: CloneReceiptRuleSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CloneReceiptRuleSetCommandInput, CloneReceiptRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
