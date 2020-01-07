import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateTrustRequest, UpdateTrustResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTrustCommandInput = UpdateTrustRequest;
export declare type UpdateTrustCommandOutput = UpdateTrustResult & __MetadataBearer;
export declare class UpdateTrustCommand extends $Command<UpdateTrustCommandInput, UpdateTrustCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: UpdateTrustCommandInput;
    constructor(input: UpdateTrustCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrustCommandInput, UpdateTrustCommandOutput>;
    private serialize;
    private deserialize;
}
