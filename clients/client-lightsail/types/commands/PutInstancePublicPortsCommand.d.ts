import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { PutInstancePublicPortsRequest, PutInstancePublicPortsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutInstancePublicPortsCommandInput = PutInstancePublicPortsRequest;
export declare type PutInstancePublicPortsCommandOutput = PutInstancePublicPortsResult & __MetadataBearer;
export declare class PutInstancePublicPortsCommand extends $Command<PutInstancePublicPortsCommandInput, PutInstancePublicPortsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: PutInstancePublicPortsCommandInput;
    constructor(input: PutInstancePublicPortsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutInstancePublicPortsCommandInput, PutInstancePublicPortsCommandOutput>;
    private serialize;
    private deserialize;
}
