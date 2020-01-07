import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetBlobInput, GetBlobOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBlobCommandInput = GetBlobInput;
export declare type GetBlobCommandOutput = GetBlobOutput & __MetadataBearer;
export declare class GetBlobCommand extends $Command<GetBlobCommandInput, GetBlobCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetBlobCommandInput;
    constructor(input: GetBlobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBlobCommandInput, GetBlobCommandOutput>;
    private serialize;
    private deserialize;
}
