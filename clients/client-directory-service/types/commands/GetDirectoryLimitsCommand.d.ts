import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { GetDirectoryLimitsRequest, GetDirectoryLimitsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDirectoryLimitsCommandInput = GetDirectoryLimitsRequest;
export declare type GetDirectoryLimitsCommandOutput = GetDirectoryLimitsResult & __MetadataBearer;
export declare class GetDirectoryLimitsCommand extends $Command<GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: GetDirectoryLimitsCommandInput;
    constructor(input: GetDirectoryLimitsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput>;
    private serialize;
    private deserialize;
}
