import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { GetMembersRequest, GetMembersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMembersCommandInput = GetMembersRequest;
export declare type GetMembersCommandOutput = GetMembersResponse & __MetadataBearer;
export declare class GetMembersCommand extends $Command<GetMembersCommandInput, GetMembersCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: GetMembersCommandInput;
    constructor(input: GetMembersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMembersCommandInput, GetMembersCommandOutput>;
    private serialize;
    private deserialize;
}
