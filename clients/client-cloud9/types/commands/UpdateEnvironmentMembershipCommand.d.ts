import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { UpdateEnvironmentMembershipRequest, UpdateEnvironmentMembershipResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateEnvironmentMembershipCommandInput = UpdateEnvironmentMembershipRequest;
export declare type UpdateEnvironmentMembershipCommandOutput = UpdateEnvironmentMembershipResult & __MetadataBearer;
export declare class UpdateEnvironmentMembershipCommand extends $Command<UpdateEnvironmentMembershipCommandInput, UpdateEnvironmentMembershipCommandOutput, Cloud9ClientResolvedConfig> {
    readonly input: UpdateEnvironmentMembershipCommandInput;
    constructor(input: UpdateEnvironmentMembershipCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Cloud9ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEnvironmentMembershipCommandInput, UpdateEnvironmentMembershipCommandOutput>;
    private serialize;
    private deserialize;
}
