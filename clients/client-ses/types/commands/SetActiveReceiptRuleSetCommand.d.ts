import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetActiveReceiptRuleSetRequest, SetActiveReceiptRuleSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetActiveReceiptRuleSetCommandInput = SetActiveReceiptRuleSetRequest;
export declare type SetActiveReceiptRuleSetCommandOutput = SetActiveReceiptRuleSetResponse & __MetadataBearer;
export declare class SetActiveReceiptRuleSetCommand extends $Command<SetActiveReceiptRuleSetCommandInput, SetActiveReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: SetActiveReceiptRuleSetCommandInput;
    constructor(input: SetActiveReceiptRuleSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetActiveReceiptRuleSetCommandInput, SetActiveReceiptRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
