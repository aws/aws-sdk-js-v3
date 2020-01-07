import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UpdateRdsDbInstanceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRdsDbInstanceCommandInput = UpdateRdsDbInstanceRequest;
export declare type UpdateRdsDbInstanceCommandOutput = __MetadataBearer;
export declare class UpdateRdsDbInstanceCommand extends $Command<UpdateRdsDbInstanceCommandInput, UpdateRdsDbInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UpdateRdsDbInstanceCommandInput;
    constructor(input: UpdateRdsDbInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRdsDbInstanceCommandInput, UpdateRdsDbInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
