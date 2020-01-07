import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetDeviceDefinitionVersionRequest, GetDeviceDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeviceDefinitionVersionCommandInput = GetDeviceDefinitionVersionRequest;
export declare type GetDeviceDefinitionVersionCommandOutput = GetDeviceDefinitionVersionResponse & __MetadataBearer;
export declare class GetDeviceDefinitionVersionCommand extends $Command<GetDeviceDefinitionVersionCommandInput, GetDeviceDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetDeviceDefinitionVersionCommandInput;
    constructor(input: GetDeviceDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceDefinitionVersionCommandInput, GetDeviceDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
