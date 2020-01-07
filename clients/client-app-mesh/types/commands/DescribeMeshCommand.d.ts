import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeMeshInput, DescribeMeshOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMeshCommandInput = DescribeMeshInput;
export declare type DescribeMeshCommandOutput = DescribeMeshOutput & __MetadataBearer;
export declare class DescribeMeshCommand extends $Command<DescribeMeshCommandInput, DescribeMeshCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: DescribeMeshCommandInput;
    constructor(input: DescribeMeshCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMeshCommandInput, DescribeMeshCommandOutput>;
    private serialize;
    private deserialize;
}
