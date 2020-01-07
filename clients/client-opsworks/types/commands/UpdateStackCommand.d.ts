import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UpdateStackRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateStackCommandInput = UpdateStackRequest;
export declare type UpdateStackCommandOutput = __MetadataBearer;
export declare class UpdateStackCommand extends $Command<UpdateStackCommandInput, UpdateStackCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UpdateStackCommandInput;
    constructor(input: UpdateStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStackCommandInput, UpdateStackCommandOutput>;
    private serialize;
    private deserialize;
}
