import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CloseInstancePublicPortsRequest, CloseInstancePublicPortsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CloseInstancePublicPortsCommandInput = CloseInstancePublicPortsRequest;
export declare type CloseInstancePublicPortsCommandOutput = CloseInstancePublicPortsResult & __MetadataBearer;
export declare class CloseInstancePublicPortsCommand extends $Command<CloseInstancePublicPortsCommandInput, CloseInstancePublicPortsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CloseInstancePublicPortsCommandInput;
    constructor(input: CloseInstancePublicPortsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CloseInstancePublicPortsCommandInput, CloseInstancePublicPortsCommandOutput>;
    private serialize;
    private deserialize;
}
