import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteDeliveryChannelRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDeliveryChannelCommandInput = DeleteDeliveryChannelRequest;
export declare type DeleteDeliveryChannelCommandOutput = __MetadataBearer;
export declare class DeleteDeliveryChannelCommand extends $Command<DeleteDeliveryChannelCommandInput, DeleteDeliveryChannelCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteDeliveryChannelCommandInput;
    constructor(input: DeleteDeliveryChannelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeliveryChannelCommandInput, DeleteDeliveryChannelCommandOutput>;
    private serialize;
    private deserialize;
}
