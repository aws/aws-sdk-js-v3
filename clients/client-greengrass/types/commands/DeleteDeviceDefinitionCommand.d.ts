import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteDeviceDefinitionRequest, DeleteDeviceDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDeviceDefinitionCommandInput = DeleteDeviceDefinitionRequest;
export declare type DeleteDeviceDefinitionCommandOutput = DeleteDeviceDefinitionResponse & __MetadataBearer;
export declare class DeleteDeviceDefinitionCommand extends $Command<DeleteDeviceDefinitionCommandInput, DeleteDeviceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteDeviceDefinitionCommandInput;
    constructor(input: DeleteDeviceDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeviceDefinitionCommandInput, DeleteDeviceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
