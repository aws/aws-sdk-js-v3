import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { PutNotificationConfigurationType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutNotificationConfigurationCommandInput = PutNotificationConfigurationType;
export declare type PutNotificationConfigurationCommandOutput = __MetadataBearer;
export declare class PutNotificationConfigurationCommand extends $Command<PutNotificationConfigurationCommandInput, PutNotificationConfigurationCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: PutNotificationConfigurationCommandInput;
    constructor(input: PutNotificationConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutNotificationConfigurationCommandInput, PutNotificationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
