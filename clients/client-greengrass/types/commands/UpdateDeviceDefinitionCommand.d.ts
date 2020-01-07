import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateDeviceDefinitionRequest, UpdateDeviceDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDeviceDefinitionCommandInput = UpdateDeviceDefinitionRequest;
export declare type UpdateDeviceDefinitionCommandOutput = UpdateDeviceDefinitionResponse & __MetadataBearer;
export declare class UpdateDeviceDefinitionCommand extends $Command<UpdateDeviceDefinitionCommandInput, UpdateDeviceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateDeviceDefinitionCommandInput;
    constructor(input: UpdateDeviceDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeviceDefinitionCommandInput, UpdateDeviceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
