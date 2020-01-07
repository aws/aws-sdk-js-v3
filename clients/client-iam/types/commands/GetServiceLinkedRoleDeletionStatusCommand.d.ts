import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetServiceLinkedRoleDeletionStatusRequest, GetServiceLinkedRoleDeletionStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServiceLinkedRoleDeletionStatusCommandInput = GetServiceLinkedRoleDeletionStatusRequest;
export declare type GetServiceLinkedRoleDeletionStatusCommandOutput = GetServiceLinkedRoleDeletionStatusResponse & __MetadataBearer;
export declare class GetServiceLinkedRoleDeletionStatusCommand extends $Command<GetServiceLinkedRoleDeletionStatusCommandInput, GetServiceLinkedRoleDeletionStatusCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetServiceLinkedRoleDeletionStatusCommandInput;
    constructor(input: GetServiceLinkedRoleDeletionStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceLinkedRoleDeletionStatusCommandInput, GetServiceLinkedRoleDeletionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
