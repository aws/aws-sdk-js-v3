import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateIPSetCommandInput = UpdateIPSetRequest;
export declare type UpdateIPSetCommandOutput = UpdateIPSetResponse & __MetadataBearer;
export declare class UpdateIPSetCommand extends $Command<UpdateIPSetCommandInput, UpdateIPSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: UpdateIPSetCommandInput;
    constructor(input: UpdateIPSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIPSetCommandInput, UpdateIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
