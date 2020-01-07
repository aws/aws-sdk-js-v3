import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListDeviceDefinitionsRequest, ListDeviceDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeviceDefinitionsCommandInput = ListDeviceDefinitionsRequest;
export declare type ListDeviceDefinitionsCommandOutput = ListDeviceDefinitionsResponse & __MetadataBearer;
export declare class ListDeviceDefinitionsCommand extends $Command<ListDeviceDefinitionsCommandInput, ListDeviceDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListDeviceDefinitionsCommandInput;
    constructor(input: ListDeviceDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeviceDefinitionsCommandInput, ListDeviceDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
