import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteReceiptRuleRequest, DeleteReceiptRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReceiptRuleCommandInput = DeleteReceiptRuleRequest;
export declare type DeleteReceiptRuleCommandOutput = DeleteReceiptRuleResponse & __MetadataBearer;
export declare class DeleteReceiptRuleCommand extends $Command<DeleteReceiptRuleCommandInput, DeleteReceiptRuleCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteReceiptRuleCommandInput;
    constructor(input: DeleteReceiptRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReceiptRuleCommandInput, DeleteReceiptRuleCommandOutput>;
    private serialize;
    private deserialize;
}
