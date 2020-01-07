import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetDeviceDefinitionRequest, GetDeviceDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeviceDefinitionCommandInput = GetDeviceDefinitionRequest;
export declare type GetDeviceDefinitionCommandOutput = GetDeviceDefinitionResponse & __MetadataBearer;
export declare class GetDeviceDefinitionCommand extends $Command<GetDeviceDefinitionCommandInput, GetDeviceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetDeviceDefinitionCommandInput;
    constructor(input: GetDeviceDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceDefinitionCommandInput, GetDeviceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
