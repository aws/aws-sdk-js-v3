import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListCuratedEnvironmentImagesInput, ListCuratedEnvironmentImagesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCuratedEnvironmentImagesCommandInput = ListCuratedEnvironmentImagesInput;
export declare type ListCuratedEnvironmentImagesCommandOutput = ListCuratedEnvironmentImagesOutput & __MetadataBearer;
export declare class ListCuratedEnvironmentImagesCommand extends $Command<ListCuratedEnvironmentImagesCommandInput, ListCuratedEnvironmentImagesCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListCuratedEnvironmentImagesCommandInput;
    constructor(input: ListCuratedEnvironmentImagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCuratedEnvironmentImagesCommandInput, ListCuratedEnvironmentImagesCommandOutput>;
    private serialize;
    private deserialize;
}
