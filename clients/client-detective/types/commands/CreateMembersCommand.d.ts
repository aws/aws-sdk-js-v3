import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { CreateMembersRequest, CreateMembersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMembersCommandInput = CreateMembersRequest;
export declare type CreateMembersCommandOutput = CreateMembersResponse & __MetadataBearer;
export declare class CreateMembersCommand extends $Command<CreateMembersCommandInput, CreateMembersCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: CreateMembersCommandInput;
    constructor(input: CreateMembersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMembersCommandInput, CreateMembersCommandOutput>;
    private serialize;
    private deserialize;
}
