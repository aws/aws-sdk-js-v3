import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeleteTrustRequest, DeleteTrustResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTrustCommandInput = DeleteTrustRequest;
export declare type DeleteTrustCommandOutput = DeleteTrustResult & __MetadataBearer;
export declare class DeleteTrustCommand extends $Command<DeleteTrustCommandInput, DeleteTrustCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeleteTrustCommandInput;
    constructor(input: DeleteTrustCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrustCommandInput, DeleteTrustCommandOutput>;
    private serialize;
    private deserialize;
}
