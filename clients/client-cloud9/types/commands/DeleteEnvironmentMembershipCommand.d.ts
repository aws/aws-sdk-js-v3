import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { DeleteEnvironmentMembershipRequest, DeleteEnvironmentMembershipResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEnvironmentMembershipCommandInput = DeleteEnvironmentMembershipRequest;
export declare type DeleteEnvironmentMembershipCommandOutput = DeleteEnvironmentMembershipResult & __MetadataBearer;
export declare class DeleteEnvironmentMembershipCommand extends $Command<DeleteEnvironmentMembershipCommandInput, DeleteEnvironmentMembershipCommandOutput, Cloud9ClientResolvedConfig> {
    readonly input: DeleteEnvironmentMembershipCommandInput;
    constructor(input: DeleteEnvironmentMembershipCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Cloud9ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEnvironmentMembershipCommandInput, DeleteEnvironmentMembershipCommandOutput>;
    private serialize;
    private deserialize;
}
