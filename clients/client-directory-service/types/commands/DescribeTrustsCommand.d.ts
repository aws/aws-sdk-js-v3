import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeTrustsRequest, DescribeTrustsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrustsCommandInput = DescribeTrustsRequest;
export declare type DescribeTrustsCommandOutput = DescribeTrustsResult & __MetadataBearer;
export declare class DescribeTrustsCommand extends $Command<DescribeTrustsCommandInput, DescribeTrustsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeTrustsCommandInput;
    constructor(input: DescribeTrustsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrustsCommandInput, DescribeTrustsCommandOutput>;
    private serialize;
    private deserialize;
}
