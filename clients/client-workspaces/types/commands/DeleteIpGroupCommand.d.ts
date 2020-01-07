import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DeleteIpGroupRequest, DeleteIpGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteIpGroupCommandInput = DeleteIpGroupRequest;
export declare type DeleteIpGroupCommandOutput = DeleteIpGroupResult & __MetadataBearer;
export declare class DeleteIpGroupCommand extends $Command<DeleteIpGroupCommandInput, DeleteIpGroupCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DeleteIpGroupCommandInput;
    constructor(input: DeleteIpGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIpGroupCommandInput, DeleteIpGroupCommandOutput>;
    private serialize;
    private deserialize;
}
