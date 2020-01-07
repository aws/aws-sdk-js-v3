import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { DeleteMembersRequest, DeleteMembersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMembersCommandInput = DeleteMembersRequest;
export declare type DeleteMembersCommandOutput = DeleteMembersResponse & __MetadataBearer;
export declare class DeleteMembersCommand extends $Command<DeleteMembersCommandInput, DeleteMembersCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: DeleteMembersCommandInput;
    constructor(input: DeleteMembersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMembersCommandInput, DeleteMembersCommandOutput>;
    private serialize;
    private deserialize;
}
