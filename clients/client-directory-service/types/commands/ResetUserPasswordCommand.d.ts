import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ResetUserPasswordRequest, ResetUserPasswordResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetUserPasswordCommandInput = ResetUserPasswordRequest;
export declare type ResetUserPasswordCommandOutput = ResetUserPasswordResult & __MetadataBearer;
export declare class ResetUserPasswordCommand extends $Command<ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ResetUserPasswordCommandInput;
    constructor(input: ResetUserPasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
