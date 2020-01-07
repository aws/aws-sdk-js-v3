import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateReceiptRuleRequest, UpdateReceiptRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateReceiptRuleCommandInput = UpdateReceiptRuleRequest;
export declare type UpdateReceiptRuleCommandOutput = UpdateReceiptRuleResponse & __MetadataBearer;
export declare class UpdateReceiptRuleCommand extends $Command<UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateReceiptRuleCommandInput;
    constructor(input: UpdateReceiptRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput>;
    private serialize;
    private deserialize;
}
