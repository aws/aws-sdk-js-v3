import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateAccountSendingEnabledRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAccountSendingEnabledCommandInput = UpdateAccountSendingEnabledRequest;
export declare type UpdateAccountSendingEnabledCommandOutput = __MetadataBearer;
export declare class UpdateAccountSendingEnabledCommand extends $Command<UpdateAccountSendingEnabledCommandInput, UpdateAccountSendingEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateAccountSendingEnabledCommandInput;
    constructor(input: UpdateAccountSendingEnabledCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAccountSendingEnabledCommandInput, UpdateAccountSendingEnabledCommandOutput>;
    private serialize;
    private deserialize;
}
