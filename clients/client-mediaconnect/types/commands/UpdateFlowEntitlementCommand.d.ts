import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateFlowEntitlementRequest, UpdateFlowEntitlementResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFlowEntitlementCommandInput = UpdateFlowEntitlementRequest;
export declare type UpdateFlowEntitlementCommandOutput = UpdateFlowEntitlementResponse & __MetadataBearer;
export declare class UpdateFlowEntitlementCommand extends $Command<UpdateFlowEntitlementCommandInput, UpdateFlowEntitlementCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: UpdateFlowEntitlementCommandInput;
    constructor(input: UpdateFlowEntitlementCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFlowEntitlementCommandInput, UpdateFlowEntitlementCommandOutput>;
    private serialize;
    private deserialize;
}
