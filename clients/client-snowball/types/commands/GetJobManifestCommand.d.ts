import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { GetJobManifestRequest, GetJobManifestResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetJobManifestCommandInput = GetJobManifestRequest;
export declare type GetJobManifestCommandOutput = GetJobManifestResult & __MetadataBearer;
export declare class GetJobManifestCommand extends $Command<GetJobManifestCommandInput, GetJobManifestCommandOutput, SnowballClientResolvedConfig> {
    readonly input: GetJobManifestCommandInput;
    constructor(input: GetJobManifestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobManifestCommandInput, GetJobManifestCommandOutput>;
    private serialize;
    private deserialize;
}
