import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateConfigurationSetSendingEnabledRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConfigurationSetSendingEnabledCommandInput = UpdateConfigurationSetSendingEnabledRequest;
export declare type UpdateConfigurationSetSendingEnabledCommandOutput = __MetadataBearer;
export declare class UpdateConfigurationSetSendingEnabledCommand extends $Command<UpdateConfigurationSetSendingEnabledCommandInput, UpdateConfigurationSetSendingEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateConfigurationSetSendingEnabledCommandInput;
    constructor(input: UpdateConfigurationSetSendingEnabledCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConfigurationSetSendingEnabledCommandInput, UpdateConfigurationSetSendingEnabledCommandOutput>;
    private serialize;
    private deserialize;
}
