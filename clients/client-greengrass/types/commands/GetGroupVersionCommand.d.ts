import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupVersionRequest, GetGroupVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetGroupVersionCommandInput = GetGroupVersionRequest;
export declare type GetGroupVersionCommandOutput = GetGroupVersionResponse & __MetadataBearer;
export declare class GetGroupVersionCommand extends $Command<GetGroupVersionCommandInput, GetGroupVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetGroupVersionCommandInput;
    constructor(input: GetGroupVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGroupVersionCommandInput, GetGroupVersionCommandOutput>;
    private serialize;
    private deserialize;
}
