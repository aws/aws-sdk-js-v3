import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RevokeFlowEntitlementRequest, RevokeFlowEntitlementResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeFlowEntitlementCommandInput = RevokeFlowEntitlementRequest;
export declare type RevokeFlowEntitlementCommandOutput = RevokeFlowEntitlementResponse & __MetadataBearer;
export declare class RevokeFlowEntitlementCommand extends $Command<RevokeFlowEntitlementCommandInput, RevokeFlowEntitlementCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: RevokeFlowEntitlementCommandInput;
    constructor(input: RevokeFlowEntitlementCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeFlowEntitlementCommandInput, RevokeFlowEntitlementCommandOutput>;
    private serialize;
    private deserialize;
}
