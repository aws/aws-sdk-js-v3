import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DeleteNotificationConfigurationType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNotificationConfigurationCommandInput = DeleteNotificationConfigurationType;
export declare type DeleteNotificationConfigurationCommandOutput = __MetadataBearer;
export declare class DeleteNotificationConfigurationCommand extends $Command<DeleteNotificationConfigurationCommandInput, DeleteNotificationConfigurationCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DeleteNotificationConfigurationCommandInput;
    constructor(input: DeleteNotificationConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNotificationConfigurationCommandInput, DeleteNotificationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
