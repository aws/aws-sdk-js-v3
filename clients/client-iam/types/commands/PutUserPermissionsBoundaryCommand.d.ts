import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutUserPermissionsBoundaryRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutUserPermissionsBoundaryCommandInput = PutUserPermissionsBoundaryRequest;
export declare type PutUserPermissionsBoundaryCommandOutput = __MetadataBearer;
export declare class PutUserPermissionsBoundaryCommand extends $Command<PutUserPermissionsBoundaryCommandInput, PutUserPermissionsBoundaryCommandOutput, IAMClientResolvedConfig> {
    readonly input: PutUserPermissionsBoundaryCommandInput;
    constructor(input: PutUserPermissionsBoundaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutUserPermissionsBoundaryCommandInput, PutUserPermissionsBoundaryCommandOutput>;
    private serialize;
    private deserialize;
}
