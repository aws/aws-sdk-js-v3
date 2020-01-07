import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { UpdateS3ResourcesRequest, UpdateS3ResourcesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateS3ResourcesCommandInput = UpdateS3ResourcesRequest;
export declare type UpdateS3ResourcesCommandOutput = UpdateS3ResourcesResult & __MetadataBearer;
export declare class UpdateS3ResourcesCommand extends $Command<UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput, MacieClientResolvedConfig> {
    readonly input: UpdateS3ResourcesCommandInput;
    constructor(input: UpdateS3ResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
