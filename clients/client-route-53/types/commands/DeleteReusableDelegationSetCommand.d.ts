import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteReusableDelegationSetRequest, DeleteReusableDelegationSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReusableDelegationSetCommandInput = DeleteReusableDelegationSetRequest;
export declare type DeleteReusableDelegationSetCommandOutput = DeleteReusableDelegationSetResponse & __MetadataBearer;
export declare class DeleteReusableDelegationSetCommand extends $Command<DeleteReusableDelegationSetCommandInput, DeleteReusableDelegationSetCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteReusableDelegationSetCommandInput;
    constructor(input: DeleteReusableDelegationSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReusableDelegationSetCommandInput, DeleteReusableDelegationSetCommandOutput>;
    private serialize;
    private deserialize;
}
