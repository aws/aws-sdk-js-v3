import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteReceiptRuleSetRequest, DeleteReceiptRuleSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReceiptRuleSetCommandInput = DeleteReceiptRuleSetRequest;
export declare type DeleteReceiptRuleSetCommandOutput = DeleteReceiptRuleSetResponse & __MetadataBearer;
export declare class DeleteReceiptRuleSetCommand extends $Command<DeleteReceiptRuleSetCommandInput, DeleteReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteReceiptRuleSetCommandInput;
    constructor(input: DeleteReceiptRuleSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReceiptRuleSetCommandInput, DeleteReceiptRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
