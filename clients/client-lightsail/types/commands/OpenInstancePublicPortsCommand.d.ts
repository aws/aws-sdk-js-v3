import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { OpenInstancePublicPortsRequest, OpenInstancePublicPortsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type OpenInstancePublicPortsCommandInput = OpenInstancePublicPortsRequest;
export declare type OpenInstancePublicPortsCommandOutput = OpenInstancePublicPortsResult & __MetadataBearer;
export declare class OpenInstancePublicPortsCommand extends $Command<OpenInstancePublicPortsCommandInput, OpenInstancePublicPortsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: OpenInstancePublicPortsCommandInput;
    constructor(input: OpenInstancePublicPortsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<OpenInstancePublicPortsCommandInput, OpenInstancePublicPortsCommandOutput>;
    private serialize;
    private deserialize;
}
