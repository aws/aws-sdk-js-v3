import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListDeviceDefinitionVersionsRequest, ListDeviceDefinitionVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeviceDefinitionVersionsCommandInput = ListDeviceDefinitionVersionsRequest;
export declare type ListDeviceDefinitionVersionsCommandOutput = ListDeviceDefinitionVersionsResponse & __MetadataBearer;
export declare class ListDeviceDefinitionVersionsCommand extends $Command<ListDeviceDefinitionVersionsCommandInput, ListDeviceDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListDeviceDefinitionVersionsCommandInput;
    constructor(input: ListDeviceDefinitionVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeviceDefinitionVersionsCommandInput, ListDeviceDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
