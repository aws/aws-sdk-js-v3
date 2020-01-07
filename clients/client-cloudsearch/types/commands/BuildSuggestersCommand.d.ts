import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { BuildSuggestersRequest, BuildSuggestersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BuildSuggestersCommandInput = BuildSuggestersRequest;
export declare type BuildSuggestersCommandOutput = BuildSuggestersResponse & __MetadataBearer;
export declare class BuildSuggestersCommand extends $Command<BuildSuggestersCommandInput, BuildSuggestersCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: BuildSuggestersCommandInput;
    constructor(input: BuildSuggestersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BuildSuggestersCommandInput, BuildSuggestersCommandOutput>;
    private serialize;
    private deserialize;
}
